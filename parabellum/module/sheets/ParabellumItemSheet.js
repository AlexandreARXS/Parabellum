export default class ParabellumItemSheet extends ItemSheet{
    get template(){
        return 'system/parabellum/templates/sheets/weapon-sheet.html';
    }

    getData(){
        const data = super.getData();
        const item = Item.create({name:"Arma de Teste", type:"Arma"});

        data.config = CONFIG.parabellum;

        return data;
    }
}