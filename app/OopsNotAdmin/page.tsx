import Link from "next/link";
import React from "react";
import { requireAdminUser } from "@/lib/auth/requireAdmin";

export default function OopsNotAdminPage() {
    return (
        <div className="CreateNewLanding-container">
            <h1>Oops! You cannot create blog posts, or project entries.</h1>
            <p>Creating an account allows for you to like posts, 
                and to comment with a unique username.
                Ha! Great Job finding the secret admin page though!
            </p>
        </div>
    );
}