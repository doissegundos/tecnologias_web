<?php
    include("controlador.php");
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>ClinicaPet- Admin</title>

    <!-- Custom fonts for this template-->
    <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="../css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div class="container">
            
        <form method="POST" action="">
            <legend>Cadastre o usuário administrador</legend>
            <div class="mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome-adm" aria-describedby="nomeHelp" name="nomeADM" >
                    <div id="nomeHelp" class="form-text"></div>
            </div>
               
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emailADM" >
                <div id="emailHelp" class="form-text"></div>
            </div>

            <div class="mb-3">
                <label for="senha" class="form-label">Senha</label>
                <input type="text" class="form-control" id="senha-adm" aria-describedby="senhaHelp" name="senhaADM" >
                <div id="senhaHelp" class="form-text"></div>
            </div>
            <input type="hidden" name="formADM">
            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
          

    </div>
    <!-- End of Page Wrapper -->





</body>

</html>