"use client";

import { LoaderWrap } from "@/components/shared/LoaderWrap";
import { TableWrap } from "@/components/shared/TableWrap";
import { getPostsData } from "@/lib/features/dataThink";
import { AppDispath, RootState } from "@/lib/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {

  const dispatch = useDispatch<AppDispath>();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(getPostsData());
  }, [dispatch])

  return (
    <div className="w-[320px] mx-auto h-[550px] overflow-auto md:w-full md:max-w-[700px] bg-white rounded-xl shadow-xl p-4 flex flex-col items-center">
      <TableWrap posts={posts} loading={loading} />
      {error && <div className="text-destructive">
        {error}
      </div>}
    </div>
  );
}
