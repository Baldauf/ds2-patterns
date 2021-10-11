import React from 'react';
import { Identity } from '../../types/identity';

import {
	EuiFlexGroup,
	EuiFlexItem,
	EuiTitle,
	EuiText,
} from '@elastic/eui';

export type ActiveIdentityProps = {
	readonly identity: Identity;
	readonly active?: Boolean;
};

const ActiveIdentity = ({ identity }: ActiveIdentityProps) => (
	<EuiFlexGroup direction="column">
		<EuiFlexItem>
			<EuiTitle size="xs">
				<span>{identity.company_name}</span>
			</EuiTitle>
			<EuiText size="s">{identity.user_name}</EuiText>
			<EuiText size="xs" color="subdued">
				{identity.user_email}
			</EuiText>
		</EuiFlexItem>
	</EuiFlexGroup>
);

ActiveIdentity.displayName = 'ActiveIdentity';
export default ActiveIdentity;
