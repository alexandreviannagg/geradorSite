// VARIAVEIS

let containerControles = document.querySelector("#container-controles");
let cabecalhoDiv = document.querySelector("#gerar-cabecalho");

// CABECALHO
let controlesCabecalho = document.querySelector("#gerar-controles-cabecalho");

// EVENTS
cabecalhoDiv.addEventListener("click", gerarCabecalho);

containerControles.addEventListener("click", function(event) {
    if (event.target && event.target.id === "gerar-controles-gerais-cabecalho") {
        gerarControlesGeraisCabecalho();
    }

    if (event.target && event.target.id === "gerar-controles-logo-cabecalho") {
        gerarControlesLogoCabecalho();
    }

    if (event.target && event.target.id === "gerar-controles-texto-cabecalho") {
        gerarControlesTextoCabecalho();
    }

    if (event.target && event.target.id === "gerar-controles-form-cabecalho") {
        gerarControlesCampoFormCabecalho()
    }
    
});


// FUNCTIONS
function gerarControlesGeraisCabecalho() {
    containerControles.innerHTML = `
        <div id="gerar-controles-cabecalho">
            <button class="botoes-gerar-controles2" id="gerar-controles-gerais-cabecalho">Controles gerais</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-logo-cabecalho">Controles da logo</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-texto-cabecalho">Controles do texto</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-form-cabecalho">Controles formulário</button>
            <div id="container-controles--editor"></div>
        </div>

        <h3 class="titulo-editor">Editor de cabeçalho</h3>
        <form action="">
            <fieldset>
                <legend>Controles gerais</legend>

                <div class="campo-editor">
                    <label for="espacamento-interno-cabecalho--editor" class="label-style-main">Informe o espaçamento</label>
                    <input type="number" name="espacamento-interno-cabecalho" class="input-style-main" max="50" min="10" value="10" id="espacamento-interno-cabecalho--editor">
                </div>

                <div class="campo-editor">
                    <label for="cor-fundo-cabecalho--editor" class="label-style-main">Selecione a cor de fundo</label>
                    <input type="color" name="cor-fundo-cabecalho" class="input-style-main" id="cor-fundo-cabecalho--editor">
                </div>

                <div class="campo-editor">
                    <label for="input-cor-borda-cabecalho" class="label-style-main">Cor da borda do cabeçalho</label>
                    <input type="color" name="cor-borda-cabecalho" id="input-cor-borda-cabecalho" class="input-style-main">
                </div>

                <div class="campo-editor">
                    <label for="input-espessura-borda-cabecalho" class="label-style-main">Espessura da borda (em px)</label>
                    <input type="number" name="espessura-borda-cabecalho" id="input-espessura-borda-cabecalho" class="input-style-main" placeholder="1" min="1" max="8">
                </div>

                <div class="campo-editor">
                    <label for="input-estilo-borda-cabecalho" class="label-style-main">Estilo da borda</label>
                    <select id="input-estilo-borda-cabecalho" class="input-style-main">
                        <option value="solid">Sólida</option>
                        <option value="dashed">Tracejada</option>
                        <option value="dotted">Pontilhada</option>
                        <option value="double">Dupla</option>
                    </select>
                </div>


                <div class="campo-editor">
                    <label for="gap-itens-cabecalho" class="label-style-main">Espaçamento entre itens (gap)</label>
                    <input type="number" name="gap-itens-cabecalho" class="input-style-main" min="0" max="100" value="10" id="gap-itens-cabecalho">
                </div>

                <label for="alinhamento-itens-cabecalho" class="label-style-main">Alinhamento dos itens</label>
                <select id="alinhamento-itens-cabecalho" class="input-style-main">
                    <option value="flex-start">Topo (início)</option>
                    <option value="center">Centro</option>
                    <option value="flex-end">Base (fim)</option>
                    <option value="space-between">Espaço entre</option>
                    <option value="space-around">Espaço ao redor</option>
                </select>

            </fieldset>
        </form>
    `;

    configurarGeraisCabecalho(); // Continua sendo chamado
}

function gerarControlesLogoCabecalho() {

    containerControles.innerHTML = `

        <div id="gerar-controles-cabecalho">
            <button class="botoes-gerar-controles2" id="gerar-controles-gerais-cabecalho">Controles gerais</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-logo-cabecalho">Controles da logo</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-texto-cabecalho">Controles do texto</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-form-cabecalho">Controles formulário</button>
            <div id="container-controles--editor"></div>
        </div>

        <h3 class="titulo-editor">Editor de cabeçalho</h3>
                <form action="">
                    <fieldset>
                        <legend>Controle da logo</legend>
                        <div class="campo-editor">
                            <label for="logo-cabecalho--editor" class="label-style-main">Escolha sua logo</label>
                            <input type="file" name="logo" class="input-style-main" id="logo-cabecalho--editor">
                        </div>
                
                        <div class="campo-editor">
                            <label for="largula-logo-cabecalho--editor" class="label-style-main">Informe a largula</label>
                            <input type="number" name="largula-logo" class="input-style-main" max="200" min="40" value="40" id="largula-logo-cabecalho--editor">
                        </div>
                
                        <div class="campo-editor">
                            <label for="altura-logo-cabecalho--editor" class="label-style-main">Informe a altura</label>
                            <input type="number" name="altura-logo" class="input-style-main" max="200" min="30" value="30" id="altura-logo-cabecalho--editor">
                        </div>
                
                        <div class="campo-editor">
                            <label for="arredondamento-logo-cabecalho" class="label-style-main">Selecione o arredondamento da logo</label>
                            <input type="number" name="arredondamento-logo" class="input-style-main" max="200" min="0" value="0" id="arredondamento-logo-cabecalho">
                        </div>

                        <div class="campo-editor">
                            <label for="input-cor-borda-logo-cabecalho" class="label-style-main">Cor da borda do cabeçalho</label>
                            <input type="color" name="cor-borda-logo-cabecalho" id="input-cor-borda-logo-cabecalho" class="input-style-main">
                        </div>

                        <div class="campo-editor">
                            <label for="input-espessura-borda-logo-cabecalho" class="label-style-main">Espessura da borda (em px)</label>
                            <input type="number" name="espessura-borda-logo-cabecalho" id="input-espessura-borda-logo-cabecalho" class="input-style-main" placeholder="1" min="1" max="8">
                        </div>

                        <div class="campo-editor">
                            <label for="input-estilo-borda-logo-cabecalho" class="label-style-main">Estilo da borda</label>
                            <select id="input-estilo-borda-logo-cabecalho" class="input-style-main">
                                <option value="solid">Sólida</option>
                                <option value="dashed">Tracejada</option>
                                <option value="dotted">Pontilhada</option>
                                <option value="double">Dupla</option>
                            </select>
                        </div>

                    </fieldset>
                </form>
    `;

    configurarLogoCabecalho();
    
}

function gerarControlesTextoCabecalho() {
    containerControles.innerHTML = `

        <div id="gerar-controles-cabecalho">
            <button class="botoes-gerar-controles2" id="gerar-controles-gerais-cabecalho">Controles gerais</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-logo-cabecalho">Controles da logo</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-texto-cabecalho">Controles do texto</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-form-cabecalho">Controles formulário</button>
            <div id="container-controles--editor"></div>
        </div>

        <h3 class="titulo-editor">Editor de cabeçalho</h3>
                <form action="">

                    <fieldset>
                        <legend>Texto do cabeçalho</legend>
                
                        <div class="campo-editor">
                            <label for="texto-cabecalho--editor" class="label-style-main">Digite seu texto</label>
                            <input type="text" name="texto-cabecalho" class="input-style-main" id="texto-cabecalho--editor">
                        </div>
                
                        <div class="campo-editor">
                            <label for="fonte-texto-cabecalho--editor" class="label-style-main">Digite o tamanho da fonte</label>
                            <input type="number" name="fonte-texto-cabecalho" class="input-style-main" id="fonte-texto-cabecalho--editor" value="18" min="18" max="100">
                        </div>
                
                        <div class="campo-editor">
                            <label for="cor-texto-cabecalho--editor" class="label-style-main">Selecione a cor do texto</label>
                            <input type="color" name="cor-texto-cabecalho" class="input-style-main" id="cor-texto-cabecalho--editor">
                        </div>
                
                        <div class="campo-editor">
                            <label for="input-cor-borda-texto-cabecalho" class="label-style-main">Cor da borda do texto</label>
                            <input type="color" name="corborda-texto" id="input-cor-borda-texto-cabecalho" class="input-style-main">
                        </div>
                
                        <div class="campo-editor">
                            <label for="input-espessura-borda-texto-cabecalho" class="label-style-main">Espessura da borda (em px)</label>
                            <input type="number" name="espessura-borda-texto" id="input-espessura-borda-texto-cabecalho" class="input-style-main" placeholder="1" min="1" max="8">
                        </div>
                
                        <div class="campo-editor">
                            <label for="input-estilo-borda-texto-cabecalho" class="label-style-main">Estilo da borda</label>
                            <select id="input-estilo-borda-texto-cabecalho" class="input-style-main">
                                <option value="solid">Sólida</option>
                                <option value="dashed">Tracejada</option>
                                <option value="dotted">Pontilhada</option>
                                <option value="double">Dupla</option>
                            </select>
                        </div>
                    </fieldset>
                </form>
    `;

    configurarTextoCabecalho();
}

function gerarControlesFormCabecalho() {
    containerControles.innerHTML = `

        <div id="gerar-controles-cabecalho">
            <button class="botoes-gerar-controles2" id="gerar-controles-gerais-cabecalho">Controles gerais</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-logo-cabecalho">Controles da logo</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-texto-cabecalho">Controles do texto</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-form-cabecalho">Controles formulário</button>
            <div id="container-controles--editor"></div>
        </div>

        <form action="">
                <fieldset>
                    <legend>Formulário</legend>
                

                    <div class="campo-editor">
                        <label for="adicionar-form-cabecalho" class="label-style-main">Selecione um campo</label>
                        <select name="select-form-cabecalho" id="adicionar-form-cabecalho" class="input-style-main">
                            <option value="op">-- SELECIONAR --</option>
                            <option value="text">Text</option>
                            <option value="email">Email</option>
                            <option value="tel">Telefone</option>
                            <option value="submit">Botão</option>
                        </select>
                    </div>

                    <div class="campo-editor">
                        <label for="label-input-form" class="label-style-main">Titulo do campo</label>
                        <input type="text" name="label-form" id="label-input-form" class="input-style-main" placeholder="Digite o titulo do campo">
                    </div>
                    
                    <div class="campo-editor">
                        <label for="tamanho-fonte-label-input-form" class="label-style-main">Tamanho da fonte do label (px)</label>
                        <input type="number" name="tamanho-fonte-label-form" id="tamanho-fonte-label-input-form" class="input-style-main" placeholder="Ex: 14" min="8" max="48">
                    </div>

                     <div class="campo-editor">
                        <label for="cor-label-input-form" class="label-style-main">Cor do label do campo</label>
                        <input type="color" name="cor-label-form" id="cor-label-input-form" class="input-style-main">
                    </div>

                    <div class="campo-editor">
                        <label for="placeholder-input-form" class="label-style-main">Texto do placeholder</label>
                        <input type="text" name="placeholder-form" id="placeholder-input-form" class="input-style-main" placeholder="Digite o texto do placeholder">
                    </div>

                    <div class="campo-editor">
                        <label for="espacamento-interno-form-cabecalho--editor" class="label-style-main">Informe o espaçamento do campo</label>
                            <input type="number" name="espacamento-interno-cabecalho" class="input-style-main" max="8" min="2" value="2" id="espacamento-interno-form-cabecalho--editor">
                        </div>
                
                    <div class="campo-editor">
                        <label for="tamanho-fonte-placeholder-input-form" class="label-style-main">Tamanho da fonte do placeholder (px)</label>
                        <input type="number" name="tamanho-fonte-placeholder-form" id="tamanho-fonte-placeholder-input-form" class="input-style-main" placeholder="Ex: 14" min="8" max="48">
                    </div>

                    <div class="campo-editor">
                        <label for="cor-placeholder-input-form" class="label-style-main">Cor do placeholder</label>
                        <input type="color" name="cor-placeholder-form" id="cor-placeholder-input-form" class="input-style-main">
                    </div>
                
                    <div class="campo-editor">
                        <label for="cor-fundo-input-form" class="label-style-main">Cor de fundo do campo</label>
                        <input type="color" name="cor-fundo-input-form" id="cor-fundo-input-form" class="input-style-main" value="#ffffff">
                    </div>
                
                    <div class="campo-editor">
                        <label for="input-cor-borda-form-cabecalho" class="label-style-main">Cor da borda do campo</label>
                        <input type="color" name="corborda-form" id="input-cor-borda-form-cabecalho" class="input-style-main">
                    </div>
                
                    <div class="campo-editor">
                        <label for="input-espessura-borda-form-cabecalho" class="label-style-main">Espessura da borda (em px)</label>
                        <input type="number" name="espessura-borda-form" id="input-espessura-borda-form-cabecalho" class="input-style-main" placeholder="1" min="1" max="8">
                    </div>
                
                    <div class="campo-editor">
                        <label for="input-estilo-borda-form-cabecalho" class="label-style-main">Estilo da borda</label>
                        <select id="input-estilo-borda-form-cabecalho" class="input-style-main">
                            <option value="solid">Sólida</option>
                            <option value="dashed">Tracejada</option>
                            <option value="dotted">Pontilhada</option>
                            <option value="double">Dupla</option>
                        </select>
                    </div>
                </fieldset>
                                
            </form>

            <button id="btn-salvar-campo">Salvar</button>
            <button id="btn-remover-campo">Excluir</button>
    `;

    configurarFormularioCabecalho();
}
function gerarCabecalho() {
    containerControles.innerHTML = `
        <div id="gerar-controles-cabecalho">
            <button class="botoes-gerar-controles2" id="gerar-controles-gerais-cabecalho">Controles gerais</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-logo-cabecalho">Controles da logo</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-texto-cabecalho">Controles do texto</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-form-cabecalho">Controles formulário</button>
            <div id="container-controles--editor"></div>
        </div>
    `;
}


function gerarControlesCampoFormCabecalho() {
    containerControles.innerHTML = `
        <div id="gerar-controles-cabecalho">
            <button class="botoes-gerar-controles2" id="gerar-controles-gerais-cabecalho">Controles gerais</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-logo-cabecalho">Controles da logo</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-texto-cabecalho">Controles do texto</button>
            <button class="botoes-gerar-controles2" id="gerar-controles-form-cabecalho">Controles formulário</button>
        </div>

        <form action="k.php" id="form-campo">
                    <fieldset>
                        <legend>
                            Gerar campo
                        </legend>

                        <div class="campo-editor">
                            <label for="input-selecionar-tipo-campoCabecalho" class="label-style-main">Selecione um campo</label>
                            <select name="sselect" id="input-selecionar-tipo-campoCabecalho" class="input-style-main">
                                <option value="op">SELECIONAR</option>
                                <option value="text">Text</option>
                                <option value="email">Email</option>
                                <option value="password">Senha</option>
                                <option value="tel">Telefone</option>
                                <option value="submit">Botão</option>
                            </select>
                        </div>

                        <div class="campo-editor">
                            <label for="input-titulo-label-campoCabelho" class="label-style-main">Informe o titulo do campo</label>
                            <input type="text" name="title" id="input-titulo-label-campoCabelho" class="input-style-main" placeholder="Informe aqui..">
                        </div>



                        <div class="campo-editor">
                            <label for="input-tamanho-fonte-labelCabelho" class="label-style-main">Tamanho da fonte do label (em px)</label>
                            <input type="number" name="fonte" id="input-tamanho-fonte-labelCabelho" class="input-style-main" placeholder="16" min="16" max="30">
                        </div>





                        <div class="campo-editor">
                            <label for="input-cor-titulo-label-campoCabelho" class="label-style-main">Selecione a cor do titulo do campo</label>
                            <input type="color" name="cor" id="input-cor-titulo-label-campoCabelho" class="input-style-main" value="#FFFFFF">
                        </div>

                        <div class="campo-editor">
                            <label for="input-placeholder-label-campoCabecalho" class="label-style-main">Informe o placeholder do campo</label>
                            <input type="text" name="placeholder" id="input-placeholder-label-campoCabecalho" class="input-style-main" placeholder="Informe o placeholder...">
                        </div>

                        <div class="campo-editor">
                            <label for="input-tamanho-fonte-placeholderCabecalho" class="label-style-main">Tamanho da fonte do placeholder (em px)</label>
                            <input type="number" name="fonte-place" id="input-tamanho-fonte-placeholderCabecalho" class="input-style-main" placeholder="12" min="12" max="18">
                        </div>


                        <div class="campo-editor">
                            <label for="input-cor-borda-campoCabecalho" class="label-style-main">Cor da borda do campo</label>
                            <input type="color" name="corborda" id="input-cor-borda-campoCabecalho" class="input-style-main" value="#cc84ff">
                        </div>

                        <div class="campo-editor">
                            <label for="input-espessura-borda-campoCabecalho" class="label-style-main">Espessura da borda (em px)</label>
                            <input type="number" name="Espessura" id="input-espessura-borda-campoCabecalho" class="input-style-main" placeholder="1" min="1" max="4">
                        </div>

                        <div class="campo-editor">
                            <label for="input-estilo-borda-campoCabecalho" class="label-style-main">Estilo da borda</label>
                            <select id="input-estilo-borda-campoCabecalho" class="input-style-main">
                                <option value="solid">Sólida</option>
                                <option value="dashed">Tracejada</option>
                                <option value="dotted">Pontilhada</option>
                                <option value="double">Dupla</option>
                            </select>
                        </div>

                        
                    </fieldset>
                </form>

                 <div>
                    <button id="btn-salvar-form-cabecalho">Salvar</button> 
                    <button id="btn-excluir-form-cabecalho">Excluir</button> 
                </div> 
    `;

    configurarCamposFormCabecalho();
}