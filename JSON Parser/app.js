$(document).ready(function () {
    // Fetch and display user details
    $('#fetchUser').click(function () {
        const userId = $('#userId').val();

        if (userId) {
            $.getJSON(`https://jsonplaceholder.typicode.com/users/${userId}`, function (userData) {
                displayUserInfo(userData);
                fetchUserPosts(userId);
            }).fail(function () {
                alert('User not found');
            });
        } else {
            alert('Please enter a User ID');
        }
    });

    // Display user information
    function displayUserInfo(user) {
        const userInfoHTML = `
            <h2>User Information</h2>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            <br>
        `;
        $('#userInfo').html(userInfoHTML);
    }

    // Fetch and display posts for the user
    function fetchUserPosts(userId) {
        $.getJSON(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, function (postsData) {
            displayPosts(postsData);
        });
    }

    // Display posts and comments
    function displayPosts(posts) {
        let postsHTML = '<h2>User Posts</h2> <br>';
        posts.forEach(function (post) {
            postsHTML += `
                <div class="post">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <button class="show-comments" data-post-id="${post.id}">Show Comments</button>
                    <div class="comments" id="comments-${post.id}"></div>
                </div>
            `;
        });
        $('#posts').html(postsHTML);
    }

    // Event delegation for showing comments
    $("#posts").on('click', '.show-comments', function () {
        const postId = $(this).data('post-id');
        const commentsDiv = $(`#comments-${postId}`);

        if (commentsDiv.is(':empty')) {
            $.getJSON(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, function (commentsData) {
                let commentsHTML = '<h4>Comments</h4>';
                commentsData.forEach(function (comment) {
                    commentsHTML += `
                        <div class="comment">
                            <p><strong>${comment.name}:</strong> ${comment.body}</p>
                        </div>
                    `;
                });
                commentsDiv.html(commentsHTML);
                commentsDiv.toggle();
            });
        } else {
            commentsDiv.toggle();
        }
    });
});
