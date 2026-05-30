import { getlanguageById, submit , submitToken} from "../utils/Problemutility.js";
import Problem from "../models/problem.js";

const CreateProblem = async (req, res) => {
  const {
    title,
    description,
    difficultylevel,
    tags,
    visibleTestcases,
    invisibleTestcases,
    startCode,
    referenceSolution,
    problemCreator,
  } = req.body;

  try {
    for (const element of referenceSolution) {
      const languageId = getlanguageById(element.language);
      const submissions = visibleTestcases.map((testcases) => ({
        source_code: element.initialCode,
        language_id: languageId,
        stdin: testcases.input,
        expected_output: testcases.output,
      }));
     
      const submitResult = await submit(submissions);
      const testans=await submitToken(submitResult);
      for(const test of testans){
        if(test.status.id!=3)return res.status(400).send("Error occured..");
      }
    }
    //We can store it in database
    const newprob=await Problem.create({
        ...req.body,
        problemCreator:req.result._id
    }); 

    res.status(201).send("Problem Created...");
  } 
  catch (err) {
    res.status(401).send("Error: " + err.message);
  }
};


export default CreateProblem;