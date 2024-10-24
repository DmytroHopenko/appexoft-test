"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { useState } from "react";
import { LoaderWrap } from "./LoaderWrap";
import Link from "next/link";

interface TableWrapProps {
  posts: PostProps[];
  loading: boolean;
}

export const TableWrap = ({ posts, loading }: TableWrapProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postPerPage = 5;

  const totalPages = Math.ceil(posts.length / postPerPage);

  const currentPosts = posts.slice(
    (currentPage - 1) * postPerPage,
    currentPage * postPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {loading ? (
        <LoaderWrap />
      ) : (
        <div className="w-full">    
        <Table >
          <TableCaption>A list of posts.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPosts.map((post) => (
                <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell className="text-right">
                    <Link href={`post/${post.id}`}>
                        <Button>Open</Button>
                    </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="w-full flex justify-between">
            <Button variant="secondary" onClick={handlePrevPage}>Prev</Button>
            <Button variant="outline" onClick={handleNextPage}>Next</Button>
        </div>
        </div>
      )}
    </>
  );
};
