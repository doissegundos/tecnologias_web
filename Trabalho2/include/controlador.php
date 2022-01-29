<?php
include_once("../classes/Cliente.php");
include_once("../classes/adm.php");
include_once("../classes/login.php");
include_once("../classes/pet.php");
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
        case "cadastrar_pet":
            include("../include/cadastrarPET.php");
            break;     
        case "visualizar_pet":
            include("../include/visualizarPET.php");
            break;   
        case "editar_pet":
            include("../include/editarPET.php");
            break;
    
        
     
    }
}


//Post
if (isset($_POST['formCadastrarCliente'])) {
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

}else if (isset($_POST['formCadastrarPET'])) {
    $objPet = new Pet();
    $objPet->setNome($_POST['nomePET']);
    $objPet->setCPF($_POST['cpfPET']);
    $objPet->cadastrar();

}
else if (isset($_POST['formEditarPet'])) {
    $objPet = new Pet();
    $objPet->setNome($_POST['nomePet']);
    $objPet->setID($_POST['idPet']);
    $objPet->editar();

}
