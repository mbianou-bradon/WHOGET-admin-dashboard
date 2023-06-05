import { BsSquare } from "react-icons/bs";
import React from "react";
import client from "@/axios/axios";
import UserComponent from "@/components/UserComponent";
import { UserType } from "@/dataTypes";
import Loading from "@/components/Loading";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Users() {
  const [users, setUsers] = React.useState<UserType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(5);
  const router = useRouter();

  React.useEffect(() => {
    const jwtToken = JSON.parse(localStorage.getItem("@jwtToken") as string);
    if (!jwtToken){
      router.replace("/login")
    }
    else {
      const users = client.get(`/users?limit=${limit}&page=${page}`);
      users
        .then((response) => {
          const data = response.data.users;
          console.log(data);
          setUsers(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err)
          setIsLoading(false);
      });
    }
    
  }, [limit, router,page]);

  let prevPageBtnStyles = "cursor-pointer hover:bg-primary flex";
  let nextPageBtnStyles = "cursor-pointer hover:bg-primary flex";
  if (page === 1)
    prevPageBtnStyles = "cursor-not-allowed hover:bg-primary/20 hidden";
  if (users.length < limit)
    nextPageBtnStyles = "cursor-not-allowed hover:bg-primary/20 hidden";

  const handlePrevPage = () => {
    if (page === 1) {
      alert("You can't go back, you are in the first page already!");
    } else {
      setPage((prevPage: number) => prevPage - 1);
    }
  };
  const handleNextPage = () => {
    if (users.length < limit) {
      alert("You have reached the end. You can't go to the Next page");
    } else {
      setPage((prevPage: number) => prevPage + 1);
    }
  };

  return isLoading ? (
    <Loading />
    ) : (
    <>
    
      <div className=" px-6">
        <table className="w-full">
          <thead className="h-16 border-b border-[#EEEEEE]">
            <tr className="text-left">
              <th className="w-[5%] hidden md:table-cell">
                <BsSquare />
              </th>
              <th className="w-[50%] sm:w-[25%]">User</th>
              <th className="w-[10%] hidden md:table-cell">Status</th>
              <th className="w-[15%] hidden sm:table-cell">Phone Number</th>
              <th className="w-[15%] hidden md:table-cell">Email</th>
              <th className="w-[15%] hidden md:table-cell">No of Strikes</th>
              <th className="w-[15%]"></th>
            </tr>
          </thead>

            
            <tbody className="[&>*]:border-b [&>*]:border-[#EEEEEE]">
            {users.length > 0 ? (
            
              users.map((user) => {
                return (
                  <UserComponent
                    key={user._id}
                    username={user.username}
                    strikes={user.strikes}
                    _id={user._id}
                    profileImage={user.profileImage}
                    age={user.age}
                    phoneNumber={user.phoneNumber}
                    email={user.email}
                    ban={user.ban}
                    location={{
                      town: "",
                      country: "",
                    }}
                  />
                );
              })
            )
           : (
            <>
                <td></td>
                <div>
                    <p>No users to display</p>
                </div>
            </>
           
            )}
            </tbody>
            
        </table>

        <div className="flex justify-end">
          <div className="w-fit border rounded-md flex justify-around gap-2 border-primary text-xs sm:text-sm [&>*]:w-10 [&>*]:sm:w-20 [&>*]:py-2 [&>*]:sm:py-4 [&>*]:justify-center [&>*:hover]:text-white my-5">
            <div onClick={handlePrevPage} className={prevPageBtnStyles}>
              <p className="text-center">
                <FaLessThan />
              </p>
            </div>
            <div onClick={handleNextPage} className={nextPageBtnStyles}>
              <p>
                <FaGreaterThan />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
