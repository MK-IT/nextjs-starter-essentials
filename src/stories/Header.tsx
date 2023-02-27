import { useState } from "react";

import "./header.css";

interface User {
  name: string;
  email: string;
}

export interface HeaderProps {
  variant: "full" | "burger";
  user: User;
}

export default function Header({ variant, user }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <header className="wrapper border">
      <div className="wrapper">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Page Title</h1>
      </div>
      <div className="wrapper">
        <div>
          {user && (
            <span className="welcome">
              Welcome, {user.name} | {user.email}
            </span>
          )}
        </div>

        {variant === "burger" && (
          <button type="button" onClick={toggle}>
            Menu
          </button>
        )}

        <div
          className={
            variant === "full"
              ? "nav-links"
              : `${isOpen ? "open" : "close"} burger`
          }
        >
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/posts">Posts</a>
        </div>
      </div>
    </header>
  );
}
