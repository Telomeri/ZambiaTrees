let data = [{
    id: 1,
    coordinates: [0.4123,321.321],
    planter: "Keijo Katala",
    plantDate: new Date(2020, 1),
    updateDate: new Date(2021, 1),
    growth: 1
  }];

const addToData = (id, coordinates, planter, plantDate, updateDate, growth) => {
    data.push({
        id: id,
        coordinates: coordinates,
        planter: planter,
        plantDate: plantDate,
        updateDate:updateDate,
        growth: growth
      });
}

const initData = () => {
    //addToData(int,list[float,float],"string", new Date(), new Date(), int)
    addToData(data[data.length-1].id+1, [321.312,321351.23], "Heimo Heimola", new Date(2021,1), new Date(2021, 8), 0);
    addToData(data[data.length-1].id+1, [321.312,321352.23], "Heimo Heimola", new Date(2021,3), new Date(2021, 9), 1);
    addToData(data[data.length-1].id+1, [321.312,321353.23], "Heimo Heimola", new Date(2021,4), new Date(2022, 1), 2);
    addToData(data[data.length-1].id+1, [324.312,3232151.23], "Katri Keijola", new Date(2021,1), new Date(2021, 8), 2);
    addToData(data[data.length-1].id+1, [321.312,321353.23], "Heimo Heimola", new Date(2021,4), new Date(2022, 1), 3);
    addToData(data[data.length-1].id+1, [324.312,3232151.23], "Katri Keijola", new Date(2021,1), new Date(2021, 8), 3);
    addToData(data[data.length-1].id+1, [321.312,321353.23], "Heimo Heimola", new Date(2021,4), new Date(2022, 1), 2);
    addToData(data[data.length-1].id+1, [324.312,3232151.23], "Katri Keijola", new Date(2021,1), new Date(2021, 8), 3);
    return data;
}
export default initData;