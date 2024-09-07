"use client";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import clsx from "clsx";
import { fontManrope } from "@/config/fonts";

const fullpageOptions = {
  sectionsColor: ["#ffffff00", "#ffffff00", "#ffffff00", "#ffffff00"],
  scrollOverflow: true,
  credits: { enabled: false },
};

export default function Home() {
  return (
    <ReactFullpage
      {...fullpageOptions}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div
              className={clsx(
                "section",
                "flex flex-col items-center justify-center h-full"
              )}
            >
              <h3 className={clsx(fontManrope.className, "text-4xl")}>
                关于 SkyTree
              </h3>
              <p className="text-xl mt-4">
                SkyTree 是一个去中心化的 Web3.0 区块链平台，旨在为用户提供低成本、快速且安全的数据发布渠道。
                通过 PoS（Proof of Stake）和 PoD（Proof of Data）结合的创新验证机制，SkyTree
                能够有效地确保发布的数据安全、有效且真实。该平台不仅赋予用户数据主权，还通过智能监管机制确保用户体验的安全性与平台的健康发展。
              </p>
            </div>

            <div
              className={clsx(
                "section",
                "flex flex-col items-center justify-center h-full"
              )}
            >
              <h3 className={clsx(fontManrope.className, "text-4xl")}>
                创新技术
              </h3>
              <p className="text-xl mt-4">
                SkyTree 结合多种先进技术，为用户提供强大的安全性、可扩展性和公平性。
              </p>
              <h4 className="text-2xl mt-6">共识机制：PoS + PoD</h4>
              <p className="text-xl mt-2">
                SkyTree 采用了 PoS（权益证明）与 PoD（数据证明）相结合的共识机制。PoS 确保网络中验证节点的权益与贡献挂钩，减少了能源消耗。PoD 则通过数据的证明来确保发布信息的真实性与有效性，同时从根本上杜绝了
                ASIC 的使用。这意味着 SkyTree 不仅环保高效，还保障了网络的公平性，每个用户都能在无专用硬件的情况下公平参与。
              </p>
            </div>

            <div
              className={clsx(
                "section",
                "flex flex-col items-center justify-center h-full"
              )}
            >
              <h3 className={clsx(fontManrope.className, "text-4xl")}>
                加密与摘要算法
              </h3>
              <p className="text-xl mt-4">
                为了确保平台的安全性，SkyTree 采用了先进的加密和摘要算法：
              </p>
              <h4 className="text-2xl mt-6">BLAKE3</h4>
              <p className="text-xl mt-2">
                一种高速的哈希算法，提供快速且安全的摘要生成，用于确保数据完整性。
              </p>
              <h4 className="text-2xl mt-6">ChaCha20</h4>
              <p className="text-xl mt-2">
                一种高效的对称加密算法，提供卓越的加密性能和安全性，确保数据传输过程中不被窃取或篡改。
              </p>
              <h4 className="text-2xl mt-6">RSA-4096</h4>
              <p className="text-xl mt-2">
                一种非对称加密算法，用于确保密钥交换和身份验证的安全性。RSA-4096 的使用提供了强大的安全保障，防止恶意攻击。
              </p>
            </div>

            <div
              className={clsx(
                "section",
                "flex flex-col items-center justify-center h-full"
              )}
            >
              <h3 className={clsx(fontManrope.className, "text-4xl")}>
                全球分布式网络
              </h3>
              <p className="text-xl mt-4">
                SkyTree 的全球 47 个数据中心确保了平台的稳定性和高效性。无论用户身处何地，都能够享受到快速、安全的网络服务，这为平台的扩展提供了强大支持。
              </p>
              <h4 className="text-2xl mt-6">自由与安全</h4>
              <p className="text-xl mt-2">
                自由与安全是 SkyTree 的核心理念。在 SkyTree 平台上，用户拥有完全的数据主权，可以自由、安全地发布和管理数据。
                虽然 SkyTree 倡导自由，但平台也设有监管机制，保护用户免受恶意行为的侵害。
              </p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
