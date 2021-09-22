let sistema = prompt("Qual o seu sistema operacional ?")

switch (sistema) {
    case 'linux':
        alert("O Linux é um sistema operacional de código aberto.")
        break;
    case 'windows':
        alert("O Windows é um sistema operacional da empresa Microsoft. ")
        break;
        case 'macos':
            alert("O macOS é um sistema operacional da empresa Apple.")
            break;
        case 'chrome os':
            alert("O Chrome OS é um sistema operacional da empresa Google.")
            break;
            
    default:
    alert("Há a possibilidade de você estar utilizando um sistema mobile.")
        break;
}