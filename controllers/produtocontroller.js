//Simulando um banco de dados em memória
let produtos = [
    {id: 1, nome: 'Pão Francês', preco:0.50, categoria: 'paes'},
    {id: 2, nome: 'Croissant', preco: 3.50, categoria: 'doces'},
    {id: 3, nome: 'Coxinha', preco: 4.00, categoria: 'salgados'}

];

const produtosController = {
    listarTodos: (req,res)=>{
        const {categoria, preco_min, preco_max} = req.query;
        let resultado = produtos;
        
        //filtrar por categoria
        if(categoria) {
            resultado = resultado.filter(p => p.categoria === categoria);
            
        }
        //filtrar por preço
        if (preco_min) {
            resultado = resultado.filter(p => p.preco >= parseFloat(preco_min));
        }
        if (preco_max) {
            resultado = resultado.filter(p => p.preco <= parseFloat(preco_max));
        }

        res.json
    }
}