import client from "@/axios/axios";
import React from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import Loading from "./Loading";
import { formatDistance, formatDistanceToNow } from "date-fns";
import Image from "next/image";

export default function AskComponent(ask: {
  _id: string;
  message: string;
  category: string;
  visibility: boolean;
  report: number;
  username: string;
  createdAt: string;
  duration: number;
  userProfile: string
}) {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const createDate = new Date(ask.createdAt);
  const duration = ask.duration * 86400000 || 0;
  const expiringDate = new Date(createDate.getTime() + duration);

  const id = ask._id;

  const handleHideAsk = () => {
    setIsLoading(true);

    const hideAsk = client.patch(`/asks/${id}`, {
      visibility: !ask.visibility,
    });
    hideAsk
      .then((response) => {
        console.log("Ask Status changed Successfully");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const Modal = () => {
    return (
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.9] z-30">
        <div className="w-full h-full flex items-center justify-center bg-black">
          <div className="w-[65%] bg-white p-10 rounded-md">
            <h1 className="text-xl font-semibold text-center mb-4">
              HIDE ASK Confirmation
            </h1>
            <p>
              This ASK was reported by users for VIOLATING the platform terms
              and policies. You are might consider Hiding it by Pressing the
              HIDE Button below.
            </p>
            <p>
              This ASK was posted by{" "}
              <span className="text-primary">{ask.username}</span>
            </p>
            <p className="text-xs my-2">
              This ASK has been reported{" "}
              <span className="text-red-600">{ask.report}</span> times
            </p>
            <div className="flex justify-end  gap-5 [&>*]:w-fit [&>*]:my-5 [&>*]:px-6 [&>*]:py-2  [&>*]:font-semibold [&>*]:rounded-md [&>*]:cursor-pointer">
              <div
                className="border-black border font-semibold rounded-md cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                <h2>CANCEL</h2>
              </div>
              <div className=" bg-red-600 text-white" onClick={handleHideAsk}>
                <h2>HIDE</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isModalOpen && <Modal />}
          <tr className="border-b border-[#EEEEEE] hover:bg-primary/20 cursor-pointer">
            <td>
              <div className="py-5 pl-2">
                <div className="text-sm mb-4 w-[85%]">
                  <p>{ask.message}</p>
                </div>
                <div className="text-[0.65rem] text-[#9C9C9C] w-3/5 flex justify-between flex-wrap gap-y-2">
                  <p>
                    posted{" "}
                    {formatDistanceToNow(new Date(createDate), {
                      addSuffix: true,
                    })}
                  </p>
                  <p>
                    {formatDistance(createDate, expiringDate)} left to expire
                  </p>
                </div>
              </div>
            </td>
            <td className="hidden sm:table-cell">{ask.category}</td>

            <td className="hidden md:table-cell">
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-primary/20">
                   <Image
                      src={ask.userProfile} alt={""} 
                      className="w-full h-full rounded-full"   
                      width={32}    
                      height={32}           
                  />
                </div>
                <h2>{ask.username}</h2>
              </div>
            </td>
            <td>
              <div className="py-5 pr-2 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-1 [&>*]:rounded-full [&>*]:h-[1.625rem] [&>*]:cursor-pointer [&>*:active]:scale-95">
                <div
                  className={`text-white ${
                    ask.visibility ? "bg-primary" : "bg-yellow-500"
                  } mb-2`}
                  onClick={() => setIsModalOpen(true)}
                >
                  <AiFillEyeInvisible className="text-lg sm:text-xl" />
                  {ask.visibility ? (
                    <h2 className="text-xs md:text-sm">Hide Question</h2>
                  ) : (
                    <h2 className="text-xs md:text-sm ">UnHide Question</h2>
                  )}
                </div>
              </div>
            </td>
          </tr>
        </>
      )}
    </>
  );
}
