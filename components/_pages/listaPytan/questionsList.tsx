import {
  Accordion,
  AccordionDetails,
  AccordionDetailsProps,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  Typography,
  TypographyProps,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type QuestionsListProps<T> = {
  itemsL: T[];
  renderQuestion: (question: T) => React.ReactNode;
  accordion: AccordionProps;
  accordionSummary?: AccordionSummaryProps;
  typography?: { children: string } & TypographyProps;
  accordionDetails?: AccordionDetailsProps;
};
export default function QuestionsList<T extends unknown>({
  itemsL,
  renderQuestion,
  accordion,
  accordionSummary,
  typography,
  accordionDetails,
}: QuestionsListProps<T>) {
  const theme = useTheme();
  const { defaultExpanded = false } = accordion;
  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        // aria-controls="panel1-content"
        // id="panel1-header"
        {...accordionSummary}
      >
        <Typography {...typography}>
          {typography ? typography.children : null}
        </Typography>
      </AccordionSummary>
      <AccordionDetails {...accordionDetails}>
        {itemsL.map(renderQuestion)}
      </AccordionDetails>
    </Accordion>
  );
}
