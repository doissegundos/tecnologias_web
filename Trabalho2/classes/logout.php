
<?php
session_start();
if(isset($_SESSION['administrador'])){
    echo "<script>alert('ENTROU')</script>";
    session_destroy();
    header("Location:../index.html");
    exit();
}
?>