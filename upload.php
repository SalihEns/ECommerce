<!-- Page Variables -->
<?php
    $page_title = "Upload";
?>
<!-- Header -->
<?php include('./includes/header.php') ?>
<div id="main-upload">
    <form id="form-upload" action="./upload-post.php" method="post" enctype="multipart/form-data">
        <div>
            <label>Name</label>
            <input name="name" type="text" placeholder="Enter product name">
        </div>
        <div>
            <label>Price</label>
            <input name="price" type="number" placeholder="Enter product price" min="0" step=".01">
        </div>
        <div>
            <label>Description</label>
            <textarea name="description" cols="30" rows="10" style="background-color: #E7EEE9;">

                </textarea>
        </div>
        <div></div>
        <div>
            <label>Rating</label>
            <input name="rating" type="number" min="0" max="5" placeholder="Enter product rating">
        </div>
        <div>
            <label>Caption</label>
            <input name="caption" type="text" placeholder="Enter product caption">
        </div>
        <div>
            <label>Image</label>
            <input name="image" type="file" >
        </div>
        <div></div>
        <div>
            <button id="btn-submit">Upload</button>
        </div>
    </form>
</div>
<!-- Footer -->
<?php include('./includes/footer.php') ?>
