"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Grid2 } from "@mui/material";
import clsx from "clsx";
import { ReactTyped } from "react-typed";

import { fontManrope, fontOpenSans, fontRubik } from "@/config/fonts";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
      <Card className={`w-2/3 h-2/3 p-6`} radius={"lg"}>
        <CardBody>
          <Grid2 container spacing={2}>
            <Grid2 className={`p-5`} size={8}>
              <h1 className={clsx(fontManrope.className, "text-6xl")}>
                SkyTree
              </h1>
              <p className={clsx(fontOpenSans.className, "text-3xl pt-5")}>
                A Web3.0 Project for&nbsp;
                <ReactTyped
                  loop
                  backDelay={1000}
                  backSpeed={50}
                  className={clsx(fontRubik.className, "text-3xl")}
                  strings={[
                    "Social Media",
                    "Office Automation",
                    "Data Ownership",
                  ]}
                  typeSpeed={40}
                />
              </p>
            </Grid2>
            <Grid2 size={4}>
              <img
                alt={"SkyTree"}
                className={`w-max h-max`}
                src={
                  "https://cdn.lightxi.com/cloudreve/uploads/2024/09/06/n3GlDIGS_1D7345558EB6D9516AA20B372BF011CF.jpg"
                }
              />
            </Grid2>
          </Grid2>
        </CardBody>
      </Card>
    </section>
  );
}
