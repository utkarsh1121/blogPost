import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export default function BlogCard() {
  const [allValues, setAllValues] = useState([]);
  const [readMoreStates, setReadMoreStates] = useState([]);

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("allValues")) || [];
    setAllValues(storedValues);
    setReadMoreStates(new Array(storedValues.length).fill(false));
  }, []);

  const toggleReadMore = (index) => {
    setReadMoreStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="flex flex-wrap justify-center py-4 opacity-70">
      {allValues.length === 0 ? (
        <Typography variant="h6">No Blogs yet!</Typography>
      ) : (
        allValues.map((entry, index) => {
          const MAX_LENGTH = 219;
          const isLongDescription = entry.Description.length > MAX_LENGTH;
          const shortDescription = isLongDescription
            ? entry.Description.slice(0, MAX_LENGTH) + "..."
            : entry.Description;

          return (
            <Card key={index} className="m-4 w-96">
              <CardActionArea>
                <CardContent className="bg-white">
                  <div className="text-gray-900 contrast-200 opacity-100">
                    <Typography gutterBottom variant="h5" component="div">
                      {entry.Title}
                    </Typography>
                    <Typography variant="body2">
                      {readMoreStates[index] || !isLongDescription
                        ? entry.Description
                        : shortDescription}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
              {isLongDescription && (
                <CardActions>
                  <Stack spacing={0}>
                    <Button
                      variant="text"
                      onClick={() => toggleReadMore(index)}
                    >
                      {readMoreStates[index] ? "Read less" : "Read more"}
                    </Button>
                  </Stack>
                </CardActions>
              )}
            </Card>
          );
        })
      )}
    </div>
  );
}







//this was my code till 17 sep 4:52 pm
// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import { useState, useEffect } from "react";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import CardActionArea from "@mui/material/CardActionArea";
// import CardActions from "@mui/material/CardActions";
// import ActionAreaCard from "./Post";

// export default function BlogCard() {

//   const [allValues, setAllValues] = useState([]);

//   useEffect(()=>{
//     const storedValues=JSON.parse(localStorage.getItem("allValues"))||[]
//     setAllValues(storedValues)
//   },[])

//   return (
//     <div className="flex flex-wrap justify-center py-4 opacity-70">
//       {allValues.length === 0 ? (
//         <Typography variant="h6">No submissions yet!</Typography>
//       ) : (
//         allValues.map((entry, index) => (
//           <Card key={index} className="m-4 w-96">
//             <CardActionArea>
//               <CardContent className="bg-white">
//                 <div className="text-gray-900 contrast-200 opacity-100">
//                   <Typography gutterBottom variant="h5" component="div">
//                     {entry.Title}
//                   </Typography>
//                   <Typography variant="body2">{entry.Description}</Typography>
//                 </div>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//               <Stack spacing={0}>
//                 <Button variant="text">Read more</Button>
//               </Stack>
//             </CardActions>
//           </Card>
//         ))
//       )}
//     </div>
//   );
// }




// export default function BlogCard() {
//   const [values, setValues] = useState(null);

//   useEffect(() => {
//     const store = JSON.parse(localStorage.getItem("values"));
//     if (store) {
//       setValues(store);
//     } else {
//       setValues({ Topic: "", Title: "", SubTitle: "", Description: "" });
//     }
//   }, []);

//   if (values===null){
//     return
//   }

//   // const handleJsonValSubmit = (jsonVal) => {
//   //   setJsonVal(jsonVal);
//   // }
//   // console.log(handleJsonValSubmit)
//   // const handleJsonValSubmit = () => {
//   //   const parStr = JSON.parse(JsonVal);
//   // };

//   return (
//     <div className="flex ml-44 mr-auto h-auto  py-4 space-x-8 opacity-70 ">
//       <div className="w-2/5">
//         {/* <ActionAreaCard onSubmit={handleJsonValSubmit} /> */}
//         <Card>
//           <CardActionArea>
//             <CardContent className=" bg-white">
//               <div className="text-gray-900 contrast-200 opacity-100">
//                 <Typography gutterBottom variant="h5" component="div">
//                   {/* React js */}
//                   {/* <parStr.title/> */}
//                   {values.Title}
//                 </Typography>
//                 <Typography variant="body2">
//                   {/* Today's trends include AI integration, sustainability, remote
//                   work, electric vehicles, blockchain, virtual reality, mental
//                   health, and personalized experiences. */}
//                   {values.Description}
//                 </Typography>
//               </div>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <Stack spacing={0}>
//               <Button variant="text">read more</Button>
//             </Stack>
//           </CardActions>
//         </Card>
//       </div>
//     </div>
//   );
// }




{
  /*<div className="w-2/5">
        <Card>
          <CardActionArea>
            <CardContent className=" bg-white">
              <div className="text-gray-900 contrast-200">
                <Typography gutterBottom variant="h5" component="div">
                  {/* Today's trends */
}
// </Typography>
// <Typography variant="body2">
{
  /* Today's trends include AI integration, sustainability, remote
                    work, electric vehicles, blockchain, virtual reality, mental
                    health, and personalized experiences. */
}
{
  /* </Typography>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Stack spacing={0}>
                <Button variant="text">read more</Button>
              </Stack>
            </CardActions>
          </Card>
        </div>*/
}
