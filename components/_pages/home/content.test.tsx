import { render } from "@testing-library/react";

import HomeContent from "@/components/_pages/home/content";

test("HomeContent", () => {
  it("renders without errors", () => {
    render(<HomeContent />);
  });

  it("displays the correct header text", () => {
    const { getByText } = render(<HomeContent />);
    const headerText = getByText("Masz pytania dotyczące naszej społeczności?");
    expect(headerText).toBeInTheDocument();
  });

  it("displays the correct section titles", () => {
    const { getByText } = render(<HomeContent />);
    const sectionTitle1 = getByText("Dlaczego warto zadawać pytania?");
    const sectionTitle2 = getByText(
      "Zachęcamy do podpisywania się imieniem i nazwiskiem",
    );
    const sectionTitle3 = getByText(
      "Weź udział w kształtowaniu naszej wspólnej przyszłości",
    );
    const sectionTitle4 = getByText("Jak możesz pomóc?");
    expect(sectionTitle1).toBeInTheDocument();
    expect(sectionTitle2).toBeInTheDocument();
    expect(sectionTitle3).toBeInTheDocument();
    expect(sectionTitle4).toBeInTheDocument();
  });
});
