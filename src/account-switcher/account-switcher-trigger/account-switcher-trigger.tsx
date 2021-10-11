import React, { MouseEvent, KeyboardEvent } from 'react';
import { Identity } from '../../types/identity';
import styled from 'styled-components';
import {
	EuiHeaderSectionItemButton,
	EuiAvatar,
	EuiPanel,
	EuiText,
	EuiShowFor,
	EuiFlexGroup,
	EuiFlexItem,
} from '@elastic/eui';
import { htmlIdGenerator } from '@elastic/eui';

export type AccountSwitcherTriggerProps = {
	readonly onClick: (
		event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
	) => void;
	readonly identity?: Identity;
};

export const AccountSwitcherTrigger = ({
	onClick,
	identity,
}: AccountSwitcherTriggerProps) => {
	const AccountSwitcherContentWrapper = styled(EuiHeaderSectionItemButton)`
		.euiHeaderSectionItemButton__content {
			display: block;
		}
	`;

	const TextConcat = styled(EuiText)`
		max-width: 156px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	`;

	const id = htmlIdGenerator()();

	return (
		<EuiPanel hasShadow={false} hasBorder={!!identity} paddingSize="none">
			{identity ? (
				<AccountSwitcherContentWrapper
					aria-controls={id}
					aria-haspopup="true"
					aria-label="Account menu"
					onClick={onClick}
				>
					<EuiFlexGroup gutterSize="xs">
						<EuiFlexItem>
							<EuiAvatar
								name={identity?.user_name ?? ''}
								initialsLength={2}
								color="#626F7E"
								size="s"
							/>
						</EuiFlexItem>
						<EuiShowFor sizes={['m', 'l', 'xl']}>
							<EuiFlexItem>
								<TextConcat>{identity?.company_name}</TextConcat>
							</EuiFlexItem>
						</EuiShowFor>
					</EuiFlexGroup>
				</AccountSwitcherContentWrapper>
			) : ( null )}
		</EuiPanel>
	);
};

AccountSwitcherTrigger.displayName = 'AccountSwitcherTrigger';
