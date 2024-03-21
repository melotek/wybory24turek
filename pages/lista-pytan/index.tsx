import { fetcher } from "@/actions/utills";
import QuestionViewUserPanel from "@/components/_pages/listaPytan/questionViewUserPanel";
import SubPageHeader from "@/components/shared/subPageHeader";
import { useTheme } from "@mui/material";
import useSWR from "swr";

const Index = () => {
  const { data, error, isLoading } = useSWR<any, any>(
    "/api/v1/questions",
    fetcher,
  );
  const theme = useTheme();
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error...</div>;
  }
  return (
    <>
      <SubPageHeader title="Lista pytań" />
      <QuestionViewUserPanel data={data} />
    </>
  );
};

export default Index;
