import Link from "next/link";
import React from "react";
import { requireAdminUser } from "@/lib/auth/requireAdmin";
import "../css/original.css";
export default function OopsNotAdminPage() {
    return (
        <div id="HeadingContainer" className="vertical-line">
            <div className="HeadingContainText">
                <h1>Oops!</h1>
            </div>
            
            <div className="intro-row"> 
                You cannot create blog posts, or project entries.
                <br />
                <br />
                Creating an account only allows for you to like posts, 
                and to comment with a unique username.
                <br />
                <br />
                Ha! Great Job finding the secret admin page though!               
                <br />
                <br />
            </div> 
                
        </div>
    );
}