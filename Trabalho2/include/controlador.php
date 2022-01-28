<?php
include_once("../classes/Cliente.php");
include_once("../classes/adm.php");
include_once("../classes/login.php");
//Get
if (isset($_GET['rota'])) {
    switch ($_GET['rota']) {
        case "cadastrar_cliente":
            include("../include/cadastrarCliente.php");
            break;

        case "visualizar_cliente":
            include("../include/visualizarCliente.php");
            break;

        case "editar_cliente":
            include("../include/editarCliente.php");
            break;
        
        
        
     
    }
}


//Post
if (isset($_POST['formCadastrarCliente'])) {
    echo "<script>alert('1!')</script>";
    $objCliente = new Cliente();
    $objCliente->setNome($_POST['nomeCliente']);
    $objCliente->setCPF($_POST['cpfCliente']);
    $objCliente->setEmail($_POST['emailCliente']);
    $objCliente->setCelular($_POST['celularCliente']);
    $objCliente->setRua($_POST['endRuaCliente']);
    $objCliente->setCidade($_POST['endCidadeCliente']);
    $objCliente->setEstado($_POST['endEstadoCliente']);
    $objCliente->cadastrar();

} else if (isset($_POST['formEditarCliente'])) {
    echo "<script>alert('2!')</script>";
    $objCliente = new Cliente();
    $objCliente->setNome($_POST['nomeCliente']);
    $objCliente->setCPF($_POST['cpfCliente']);
    $objCliente->setEmail($_POST['emailCliente']);
    $objCliente->setID($_POST['idCliente']);
    $objCliente->setCelular($_POST['celularCliente']);
    $objCliente->setRua($_POST['endRuaCliente']);
    $objCliente->setCidade($_POST['endCidadeCliente']);
    $objCliente->setEstado($_POST['endEstadoCliente']);
    $objCliente->editar();

}else if (isset($_POST['formADM'])) {
    $objAdm = new Adm();
    $objAdm->setNome($_POST['nomeADM']);
    $objAdm->setSenha($_POST['senhaADM']);
    $objAdm->setEmail($_POST['emailADM']);
    $objAdm->cadastrar();

}else if (isset($_POST['formLogin'])) {
    verificar($_POST['emailADM'],$_POST['senhaADM']);

}
