import client from "@/axios/axios";
import AskComponent from "@/components/AskComponent";
import Loading from "@/components/Loading";
import { AskType } from "@/dataTypes";
import { useRouter } from "next/router";
import React from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

export default function Content() {
  const [asks, setAsks] = React.useState<AskType[]>([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(5);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const router = useRouter();

  React.useEffect(() => {
    const jwtToken = JSON.parse(localStorage.getItem("@jwtToken") as string);
    if (!jwtToken){
      router.replace("/login")
    }
    else {
    const asks = client.get(`/asks?category=&limit=5&page=${page}`);
    setIsLoading(true);
    asks
      .then((response) => {
        const data = response.data.asks;
        console.log(data);
        setIsLoading(false);
        setAsks(data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    }
  }, [page, router]);

  let prevPageBtnStyles = "cursor-pointer hover:bg-primary flex";
  let nextPageBtnStyles = "cursor-pointer hover:bg-primary flex";
  if (page === 1)
    prevPageBtnStyles = "cursor-not-allowed hover:bg-primary/20 hidden";
  if (asks.length < limit)
    nextPageBtnStyles = "cursor-not-allowed hover:bg-primary/20 hidden";

  const handlePrevPage = () => {
    if (page === 1) {
      alert("You can't go back, you are in the first page already!");
    } else {
      setPage((prevPage: number) => prevPage - 1);
    }
  };
  const handleNextPage = () => {
    if (asks.length < limit) {
      alert("You have reached the end. You can't go to the Next page");
    } else {
      setPage((prevPage: number) => prevPage + 1);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="px-6 relative">
      <table className="w-full">
        <thead className="h-16 border-b border-[#EEEEEE]">
          <tr className="text-left">
            <th className="w-[60%] sm:w-[50%]">Question</th>
            <th className="hidden sm:table-cell sm:w-[15%]">Category</th>
            <th className="hidden md:table-cell md:w-[20%]">Users</th>
            <th className="w-[40%] sm:w-[35%] md:w-[15%]"></th>
          </tr>
        </thead>

        <tbody>
          {asks.length > 0 ? (
            asks.map((askData) => {
              return (
                <AskComponent
                  key={askData._id}
                  message={askData.message}
                  category={askData.category}
                  _id={askData._id}
                  visibility={askData.visibility}
                  report={askData.report}
                  username={askData.userName} createdAt={askData.createdAt} duration={askData.duration}  
                  userProfile={askData.userProfile}              />
              );
            })
          ) : (
            <div>
              <p>
                No asks to display. Please refresh to see if they are more to
                display
              </p>
            </div>
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
  );
}
