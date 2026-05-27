{
  const MAX_COUNT = 100;
  console.log(`Value initialized: ${MAX_COUNT}`);

  // Will get error : TypeError: Assignment to constant variable.
  //MAX_COUNT = 101
  //console.log(`Re initialized: ${MAX_COUNT}`)

  //Will get error : SyntaxError: Identifier 'MAX_COUNT' has already been declared
  //const MAX_COUNT = 99.99
  //console.log(`Re Declaration: ${MAX_COUNT}`)

  {
    /*
      If comment 16 line it will print the global value  100, 
      If not will print blocked scope value 55.89 
    */
    const MAX_COUNT = 55.89;
    console.log(`Blocked scope: ${MAX_COUNT}`);
  }

  function printMaxCount() {
    /*
      If comment 27 line it will print the global value  100, 
      If not will print blocked scope value True
    */
    const MAX_COUNT = true;
    console.log(`In function scope : ${MAX_COUNT}`);
  }

  printMaxCount();

  const CLG_DETAILS = {
    collage_name: "SRKR ENG Collage",
    clg_code: "SRKR",
  };
  console.log(CLG_DETAILS);

  // Property values of the Object we can update
  CLG_DETAILS.collage_name = "SRKR Univercity";
  // New property alos we can add
  CLG_DETAILS.state = 'AP'
  console.log(CLG_DETAILS);

  // Will get error : SyntaxError: Identifier 'CLG_DETAILS' has already been declared
  //   const CLG_DETAILS = {
  //     collage_name : 'YN Collage',
  //     clg_code : 'YNC'
  //   }
}
