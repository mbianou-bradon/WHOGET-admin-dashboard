import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsSquare } from "react-icons/bs";
import { HiOutlineBan } from "react-icons/hi";
import Loading from "./Loading";
import client from "@/axios/axios";

export default function UserComponent(user: {
  _id: string;
  username: string;
  strikes: number;
  profileImage: string;
  age: number;
  phoneNumber: number;
  email: string;
  ban: boolean;
  location: {
    town: string;
    country: string;
  };
}) {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [strike, setStrike] = React.useState<number>(user.strikes);
  const [isStrikeModalOpen, setIsStrikeModalOpen] =
    React.useState<boolean>(false);

  const id = user._id;

  const handleStrikeUser = () => {
    setIsLoading(true);

    const strikeUser = client.patch(`/users/${id}`, {
      strike: strike + 1,
    });
    strikeUser
      .then((response) => {
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleBanUser = () => {
    setIsLoading(true);

    const banUser = client.patch(`/users/${id}`, {
      ban: !user.ban,
    });
    banUser
      .then((response) => {
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleModalStrike = () => {
    setIsModalOpen(true);
    setIsStrikeModalOpen(true)
  };
  const handleModalBan = () => {
    setIsModalOpen(true);
    setIsStrikeModalOpen(false)
  };
  const handleRedirectToStrike = () => {
    setIsModalOpen(true);
    setIsStrikeModalOpen(true);
  };

  const StrikeModal = () => {
    return (
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.9] z-30">
        <div className="w-full h-full flex items-center justify-center bg-black backdrop-blur-2xl">
          <div className="w-[50%] bg-white p-10 rounded-md ">
            <h1 className="text-xl font-semibold text-center mb-4">
              Strike Confirmation
            </h1>
            <p>
              You are about to strike{" "}
              <span className="text-primary">{user.username}</span> due to
              violation of one of the terms and condition. Press CONFIRM to
              confirm
            </p>
            <p className="text-sm my-2">
              Currently this user has {user.strikes} strikes
            </p>
            <div className="flex justify-end  gap-5 [&>*]:w-fit [&>*]:my-5 [&>*]:px-6 [&>*]:py-2 [&>*]:text-white [&>*]:font-semibold [&>*]:rounded-md [&>*]:cursor-pointer">
              <div
                className="bg-red-600 font-semibold rounded-md cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                <h2>CANCEL</h2>
              </div>
              <div className=" bg-primary" onClick={handleStrikeUser}>
                <h2>CONFIRM</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const BanModal = () => {
    return (
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.9] z-30">
        <div className="w-full h-full flex items-center justify-center bg-black">
          <div className="w-[50%] bg-white p-10 rounded-md">
            <h1 className="text-xl font-semibold text-center mb-4">
              BAN CONFIRMATION
            </h1>
            <p>
              You are about to BAN{" "}
              <span className="text-primary">{user.username}</span> due to
              multiple violation of one of the terms and condition. Press
              CONFIRM to confirm
            </p>
            <p className="text-sm my-2">
              Currently this user has {user.strikes} strikes. You might want to{" "}
              <span className="text-red-500 cursor-pointer" onClick={handleRedirectToStrike}>
                <a >STRIKE</a>
              </span>{" "}
              the user instead
            </p>
            <div className="flex justify-end  gap-5 [&>*]:w-fit [&>*]:my-5 [&>*]:px-6 [&>*]:py-2 [&>*]:text-white [&>*]:font-semibold [&>*]:rounded-md [&>*]:cursor-pointer">
              <div
                className="bg-red-600 font-semibold rounded-md cursor-pointer"
                onClick={() => {
                  setIsModalOpen(false)
                }}
              >
                <h2>CANCEL</h2>
              </div>
              <div className=" bg-primary" onClick={handleBanUser}>
                <h2>CONFIRM</h2>
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
          {isModalOpen && <>{isStrikeModalOpen ? <StrikeModal /> : <BanModal /> }</>}
          <tr className="hover:bg-primary/20 cursor-pointer">
            <td className="pl-2 hidden md:table-cell">
              <BsSquare />
            </td>
            <td>
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                <h2 className="text-sm sm:text-[1rem]">{user.username}</h2>
              </div>
            </td>
            <td className="hidden lg:table-cell">Active</td>
            <td className="hidden md:table-cell">671 242 032</td>
            <td className="hidden md:table-cell">15</td>
            <td>{user.strikes}</td>
            <td className="pr-2">
              <div className="py-5 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:gap-1 [&>*]:rounded-full [&>*]:h-[1.625rem] [&>*]:cursor-pointer [&>*:active]:scale-95">
                <div
                  className="text-white bg-primary mb-2"
                  onClick={handleModalStrike}
                >
                  <AiOutlineThunderbolt className="text-xl" />
                  <h2>Strike</h2>
                </div>
                <div className="border border-primary text-primary" onClick={handleModalBan}>
                  <HiOutlineBan />
                  <h2>Ban</h2>
                </div>
              </div>
            </td>
          </tr>
        </>
      )}
    </>
  );
}
