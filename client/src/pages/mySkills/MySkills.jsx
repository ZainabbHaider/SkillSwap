import React from "react";
import "./MySkills.scss";
import { Link } from "react-router-dom";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function MySkills() {
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  console.log(currentUser);

  const { isLoading, error, data } = useQuery({
    queryKey: ["mySkills"],
    queryFn: () =>
      newRequest
        .get(`/skills?userId=${currentUser._id}`)
        .then((res) => res.data),
  });
  console.log(data)
  const mutation = useMutation({
    mutationFn: (id) => {
      console.log(id)
      return newRequest.delete(`/skills/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["mySkills"]);
    },
  });

  const handleDelete = (id)=>{
    mutation.mutate(id);
  }

  return (
    <div className="mySkills">
      {isLoading?"Loading":error?"Something went wrong!":<div className="container">
        <div className="title">
          <h1>My Skills</h1>
          <Link to="/add">
            <button>Add New Skill</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Lessons</th>
            <th>Delete</th>
          </tr>
          {data.map((skill)=>(
            <tr key={skill._id}>
            <td>
              <img
                className="img"
                src={skill.cover}
                alt="skill"
              />
            </td>
            <td>{skill.title}</td>
            <td>{skill.lessons}</td>
            <td>
              <img
                className="delete"
                src="/imgs/delete.png"
                alt=""
                onClick={()=>handleDelete(skill._id)}
              />
            </td>
          </tr>))}
        </table>
      </div>}
    </div>
  );
}

export default MySkills;
