import * as React from "react";
import QuestionsList from "./questionsList";
import { Typography, useTheme, AccordionProps } from "@mui/material";
import theme from "@/ui/config/theme";
import { IAppData } from "@/types";
import QuestionViewCard from "./questionViewCard";
type Props = {
  data: {
    questionsMayor: IAppData["questionForms"];
    questionsCityCouncil: IAppData["questionForms"];
    questionsCountyCouncil: IAppData["questionForms"];
  };
};

export default function QuestionViewUserPanel({ data }: Props) {
  return (
    <>
      <QuestionsList
        accordion={{ defaultExpanded: true } as AccordionProps}
        typography={{ children: "Pytania do kandydatów na burmistrza" }}
        itemsL={data.questionsMayor}
        renderQuestion={(question: any) => (
          <QuestionViewCard question={question} key={question._id} />
        )}
      />
      <QuestionsList
        accordion={{ defaultExpanded: false } as AccordionProps}
        typography={{ children: "Pytania do kandydatów do rady miejskiej" }}
        itemsL={data!.questionsCityCouncil}
        renderQuestion={(question: any) => (
          <QuestionViewCard question={question} key={question._id} />
        )}
      />
      <QuestionsList
        accordion={{ defaultExpanded: false } as AccordionProps}
        typography={{ children: "Pytania do kandydatów do rady ;powiatowej" }}
        itemsL={data!.questionsCountyCouncil}
        renderQuestion={(question: any) => (
          <QuestionViewCard question={question} key={question._id} />
        )}
      />
    </>
  );
}
