function clicar() {
    let a = prompt(`Qual é o valor de a?`)
    if (a.length == 0) {
        alert(`Por favor, insira um valor.`)
    } else {
        let aReal = Number(a)
        if (isNaN(aReal)) {
            alert(`Valor digitado inválido.`)
        } else {
            let b = prompt(`Qual é o valor de b?`)
            if (b.length == 0) {
                alert(`Por favor, insira um valor.`)
            } else {
                let bReal = Number(b)
                if (isNaN(bReal)) {
                    alert(`Valor digitado inválido.`)
                } else {
                    let c = prompt(`Qual é o valor de c?`)
                    if (c.length == 0) {
                        alert(`Por favor, insira um valor.`)
                    } else {
                        let cReal = Number(c) 
                        if (isNaN(cReal)) {
                            alert(`Valor digitado inválido.`)
                        } else {
                            let conteudo = document.getElementById('secao')

                            let delta = (bReal ** 2) - (4 * aReal * cReal)

                            conteudo.innerHTML = `<h2>Resolvendo Bhaskara</h2>`
                            conteudo.innerHTML += `<p class="paragrafos">A equação atual é <span>${aReal}x<sup>2</sup> + ${bReal}x + ${cReal} = 0</span></p>`

                            conteudo.innerHTML += `<p class="paragrafos">O cálculo realizado será <span>&Delta; = ${bReal}<sup>2</sup> - 4 . ${aReal} . ${cReal}</span></p>`

                            conteudo.innerHTML += `<p class="paragrafos">O valor calculado foi <mark>&Delta; = ${delta}</mark></p>`
                        }
                    }
                }
            }
        }
    }
}