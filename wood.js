/* fixed  per item wood requirements.
1) chair ---> 3 cft.
2) table ---> 10 cft.
3) bed ----> 50 cft, 
*/


function woodRuirements(chairItem, tableItem, bedItem){
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    const chairQuantity = chairItem * chairWood;
    const tableQuantity = tableItem * tableWood;
    const bedQuantity =   bedItem * bedWood;

    const totelWood = chairQuantity + tableQuantity + bedQuantity;

    return totelWood;


}

const woodRuirementsItems= woodRuirements(3, 3, 10);
console.log(woodRuirementsItems);