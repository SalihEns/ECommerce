<!-- Page Variables -->
<?php
$page_title = "Signup";
?>
<!-- Header -->
<?php include('./includes/header.php') ?>
<div id="signup-page">
    <h1>Sign Up</h1>
    <form>
        <label>Name</label>
        <input type="text" placeholder="Enter your name">
        <label for="dob">Date of Birth</label>
        <input class="iform" type="date" id="dob" name="dob">
        <label for="email">Email</label>
        <input class="iform" type="email" id="email" name="email" placeholder="Enter your email..">

        <label for="city">City</label>
        <input class="iform" type="city" id="city" name="city" placeholder="Ottawa">
        <label for="province">Province</label>
        <select id="province" name="province">
            <option>Please Select..</option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="YT">Yukon</option>
        </select>
        <div id="signupblock">
            <input id= "signupbtn" type="submit" value="signup">
            <input id= "signupbtn" type="reset" value="reset">
        </div>
    </form>
</div>
<!-- Footer -->
<?php include('./includes/footer.php') ?>