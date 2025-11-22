import { Button, PanelSection, PanelSectionRow, showToast } from "decky-frontend-lib";
import { server } from "decky-frontend-lib";

const Content: React.FC = () => {
  const launchDiscord = async () => {
    const res = await server.callPluginMethod("add_discord", {});
    showToast(res?.message ?? "Discord gestartet");
  };

  return (
    <PanelSection title="Discord Web">
      <PanelSectionRow>
        <Button onClick={launchDiscord}>Discord starten</Button>
      </PanelSectionRow>
    </PanelSection>
  );
};

export default Content;
