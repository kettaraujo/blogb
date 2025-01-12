const newPostBtn = document.getElementById("new-post-btn");
const postModal = document.getElementById("post-modal");
const closeModalBtn = document.querySelector(".close-btn");
const postForm = document.getElementById("post-form");
const postsContainer = document.getElementById("post-list");

let posts = [];

newPostBtn.addEventListener("click", () => {
    postModal.style.display = "flex";
    postForm.reset();
    postForm.dataset.editingIndex = "";
});


closeModalBtn.addEventListener("click", () => {
    postModal.style.display = "none";
});

postForm.addEventListener("submit", (event) => {
    
    event.preventDefault();
    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;
    const editingIndex = postForm.dataset.editingIndex;

    if (editingIndex) {
        
        posts[editingIndex] = { title, content, createdAt: posts[editingIndex].createdAt };
    } else {
        
        posts.push({ title, content, createdAt: new Date() });
    }

    
    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    renderPosts();
    postModal.style.display = "none";
});


function renderPosts() {
    postsContainer.innerHTML = "";
    posts.forEach((post, index) => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        postDiv.innerHTML = `
        <h3 data-index="${index}" class="post-title">
            <a href="first.html?title=${encodeURIComponent(post.title)}&content=${encodeURIComponent(post.content)}&date=${encodeURIComponent(post.createdAt)}">${post.title}</a>
        </h3>
        <small>${new Date(post.createdAt).toLocaleString()}</small>
        <div class="post-buttons">
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        </div>
    `;
    
    postsContainer.appendChild(postDiv);
    
    });

    addPostEventListeners();
}

function addPostEventListeners() {

    const postTitles = document.querySelectorAll(".post-title");
    postTitles.forEach((title) => {
        title.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
        });
    });

    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            const post = posts[index];

            document.getElementById("post-title").value = post.title;
            document.getElementById("post-content").value = post.content;
            postForm.dataset.editingIndex = index;

            postModal.style.display = "flex";
        });
    });

    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            posts.splice(index, 1);
            renderPosts(); 
        });
    });
}

renderPosts();