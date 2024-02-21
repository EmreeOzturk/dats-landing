import MainLayout from "@/components/layout/mainLayout";
import { useEffect } from "react";

export default function HeathleyEth() {
  useEffect(() => {
    window.location.href = "https://dapp.datsproject.io/referral?code=s/BJlDmSkdKx3Ulgvh+baQCvcyf4T/EHmGSBks4HLXW9wE602UfOPNAYNquDf8sp";
  }, []);
  return (
    <MainLayout title="HeathleyEth">
      <h1 className="min-h-[30dvh] pt-10">Referral</h1>
    </MainLayout>
  );
}
