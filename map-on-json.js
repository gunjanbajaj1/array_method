  const p = [
    {
      id: 1,
      name: "John Doe",
      city: "New York",
      state: "New York",
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      city: "Los Angeles",
      state: "California",
      isActive: false,
    },
    {
      id: 3,
      name: "Michael Johnson",
      city: "Chicago",
      state: "Illinois",
      isActive: true,
    },
    {
      id: 4,
      name: "Emily Brown",
      city: "Houston",
      state: "Texas",
      isActive: true,
    },
  ];

  const new_p = p.map((currentItem,index,arr) => {
    if(arr.isActive==true){
            arr.isActive="Available";
    }
    else{
        arr.isActive="Unavailable";
    }
    return arr;
  });
  console.log(p,new_p);