import React from "react";

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiText
} from "@elastic/eui";
import { AccountSwitcher } from "../account-switcher/account-switcher";

const TopLinks = [
    {
      label: 'Home',
      iconType: 'truckLine',
      isActive: true,
      'aria-current': true,
      onClick: () => {},
      pinnable: false,
    },
  ];
  const LearnLinks = [
    { label: 'Docs', onClick: () => {} },
    { label: 'Blogs', onClick: () => {} },
    { label: 'Webinars', onClick: () => {} }
  ];

const Header = () => {  
  const leftSectionItems = [
    <EuiHeaderSection grow={false}>
      <EuiHeaderSectionItem border="right">
        <EuiHeaderLogo
          iconType="https://unav.equipmentshare.com/fleet.svg"
          href="#"
          onClick={(e) => e.preventDefault()}
          aria-label="Go to home page"
        />
      </EuiHeaderSectionItem>
      <EuiHeaderSectionItem border="right">
        <EuiText>App</EuiText>
      </EuiHeaderSectionItem>
    </EuiHeaderSection>,
  ];
  return (
    <EuiHeader
        position="fixed"
        sections={[
          {
            items: leftSectionItems,
            borders: 'right',
          },
          {
            items: [
              <EuiHeaderSection side="right">
                <AccountSwitcher />
              </EuiHeaderSection>
            ],
          },
        ]}
      />
  );
};

export default Header;
