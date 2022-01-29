<?php
include_once("../classes/Cliente.php");
include_once("../classes/Conexao.php");
include_once("../classes/Utilidades.php");

if (isset($_SESSION['administrador'])){


$objConexao= new Conexao();
$conexaoBD= $objConexao->getConexao();
$sql="select * from consulta";
$retornoBD=$conexaoBD-> query($sql);

if ($retornoBD != null) {
?>
    <br/>
    <div class="row">
        <div class="col-12">
            <table class="table table-striped table-hover">
                <tr>
                    <th width="20%">#</th>
                    <th width="20%">Nome Pet</th>
                    <th width="20%">Data</th>
                    <th width="20%">Hora</th>
                    <th width="20%">Observações</th>
                </tr>

                <?php

                while ($retorno = $retornoBD->fetch_object()) {
                    echo '<tr><td>' . $retorno->id_consulta . '</td><td>' .
                        $retorno->nome_pet . '</td><td>' .
                        $retorno->data_consulta . '</td><td>' .
                        $retorno->hora_consulta . '</td><td>'.
                        $retorno->obs_consulta . '</td>';
                }
                ?>
            </table>
        </div>
    </div>
<?php
}
}else{
    header("Location:../index.html");
}?>