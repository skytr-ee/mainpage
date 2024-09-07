"use client";
import { Card } from "@nextui-org/card";
import clsx from "clsx";
import React from "react";
import { Link } from "@nextui-org/link";

import { fontManrope } from "@/config/fonts";
import { Grid2 } from "@mui/material";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
      <Card
        className={clsx("p-9 bg-emerald-600 dark:bg-emerald-500 text-white", fontManrope.className)}
        radius={"lg"}
      >
        <h3 className={clsx(fontManrope.className, "text-6xl")}>
          SkyTree is a decentralized Web 3.0 blockchain platform designed to
          provide users with a low-cost, high-performance, and secure blockchain.
        </h3>
      </Card>
      <h4 className={clsx(fontManrope.className, "text-4xl pt-5")}>
        We use
        <Link
          className={"text-4xl pl-2 pr-2"}
          color={"success"}
          href="https://en.wikipedia.org/wiki/Proof_of_stake"
          underline={"always"}
        >
          PoS(Proof of Stake)
        </Link>
        and
        <Link
          className={"text-4xl pl-2 pr-2"}
          color={"success"}
          href="/PoD"
          underline={"always"}
        >
          PoD(Proof of Data)
        </Link>
        as our consensus mechanism.
      </h4>

      <h3 className={clsx(fontManrope.className, "text-6xl pt-10")}>
        Free and secure is our core concept.
      </h3>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <h4
            className={clsx(fontManrope.className, "text-4xl pt-5")}
          >
            Data Ownership
          </h4>
          <p>
            At SkyTree, we believe that data ownership is a fundamental right. However, in today's world, data is often collected and stored by large corporations without the user's consent.
          </p>
        </Grid2>
        <Grid2 size={6}>
          <h4
            className={clsx(fontManrope.className, "text-4xl pt-5")}
          >
            Smart Regulation & Protection
          </h4>
          <p>
          </p>
        </Grid2>
      </Grid2>

    </section>
  );
}
