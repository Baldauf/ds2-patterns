import React, { useState } from "react";
import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiLink,
  EuiRange,
  EuiSwitch,
  EuiText,
  EuiSelect,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiFieldSearch
} from "@equipmentshare/ds2-eui";

import { CalendarLineIcon } from "@equipmentshare/ds2-icons";

const SmallForm = () => {
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);
  const [rangeValue, setRangeValue] = useState("120");

  const onRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const onSwitchChange = () => {
    setIsSwitchChecked(!isSwitchChecked);
  };

  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiPanel>
          <EuiRange
          min={100.0}
          max={200.0}
          step={1}
          value={rangeValue}
          onChange={onRangeChange}
          showLabels
          showValue={isSwitchChecked}
          />
          <EuiButton iconType={CalendarLineIcon} size="s" color="success">Save</EuiButton>
        </EuiPanel>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiPanel>
          <EuiForm component="form">
            <EuiFormRow
              label="Text field"
              helpText="I am some friendly help text."
            >
              <EuiFieldText name="first" placeholder="Override focus" />
            </EuiFormRow>
            <EuiFormRow
              label="Select"
              labelAppend={
                <EuiText size="xs">
                    <EuiLink>Link to some help</EuiLink>
                </EuiText>
              }
            >
              <>
                <EuiSelect
                  onChange={() => {}}
                  options={[
                    { value: "option_one", text: "Option one" },
                    { value: "option_two", text: "Option two" },
                    { value: "option_three", text: "Option three" },
                  ]}
                />
                <EuiFieldSearch
                  placeholder="Search this"
                  isClearable={true}
                />
              </>
            </EuiFormRow>
            <EuiFormRow hasChildLabel={false}>
              <EuiSwitch
                name="switch"
                label="Toggle the persistent range value in the sidebar"
                checked={isSwitchChecked}
                onChange={onSwitchChange}
              />
            </EuiFormRow>
          </EuiForm>
        </EuiPanel>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}

export default SmallForm;
