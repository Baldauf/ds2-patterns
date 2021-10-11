import React from 'react';
import { Identity } from '../../types/identity';

export type AccountSwitcherIdentitiesProps = {
	readonly identities: Identity[];
	readonly activeIdentity: Identity;
};

import { EuiListGroup, EuiListGroupItem } from '@elastic/eui';

export const AccountSwitcherIdentities = ({
	identities,
	activeIdentity,
}: AccountSwitcherIdentitiesProps) => {
	const inactiveIdentities = identities.filter(
		(id) => id.user_id !== activeIdentity.user_id,
	);

	return (
		<EuiListGroup maxWidth={300} data-testid="identity-list">
			{Object.values(inactiveIdentities).map((identity) => (
				<EuiListGroupItem
					label={identity.company_name}
					key={identity.company_id}
					onClick={() => {
						alert(`${identity.company_name} was clicked`);
					}}
				/>
			))}
		</EuiListGroup>
	);
};
