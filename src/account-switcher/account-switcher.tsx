import React, { useState } from 'react';
import { AccountSwitcherTrigger } from './account-switcher-trigger/account-switcher-trigger';
import { AccountSwitcherIdentities } from './account-switcher-identities/identities';

import { EuiPopover, EuiPopoverTitle } from '@elastic/eui';
import ActiveIdentity from './account-switcher-identities/active-identity';

export const AccountSwitcher = () => {
	const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

	const onButtonClick = () =>
		setIsSwitcherOpen((isSwitcherOpen) => !isSwitcherOpen);
	const closePopover = () => setIsSwitcherOpen(false);

	const activeIdentity = {
		account_id: '2bef660d-2130-4ea2-a956-cb88817d5978',
		company_id: 91,
		company_name: 'Capital Equipment, Inc.',
		user_id: 417,
		user_name: 'Wilburt Cisco',
		user_email: 'wilburt_cisco@equipmentshare.com',
	};
	const identities = [
		{
			account_id: '2bef660d-2130-4ea2-a956-cb88817d5978',
			company_id: 1,
			company_name: 'Capital Paving, Inc',
			user_id: 435,
			user_name: 'Catha Von Helmholtz',
			user_email: 'cvon0@ftc.gov',
		},
		{
			account_id: '2bef660d-2130-4ea2-a956-cb88817d5978',
			company_id: 59,
			company_name: 'Feedfire',
			user_id: 601,
			user_name: 'Ezequiel Densell',
			user_email: 'edensell1@wp.com',
		},
		{
			account_id: '2bef660d-2130-4ea2-a956-cb88817d5978',
			company_id: 91,
			company_name: 'Capital Equipment, Inc.',
			user_id: 417,
			user_name: 'Wilburt Cisco',
			user_email: 'wilburt_cisco@equipmentshare.com',
		},
		{
			account_id: '2bef660d-2130-4ea2-a956-cb88817d5978',
			company_id: 23,
			company_name: 'Topicstorm',
			user_id: 130,
			user_name: 'Kipp Andrei',
			user_email: 'kandrei3@wikipedia.org',
		},
	];

	return (
		<EuiPopover
			button={
				<AccountSwitcherTrigger
					identity={activeIdentity}
					onClick={onButtonClick}
				/>
			}
			isOpen={isSwitcherOpen}
			closePopover={closePopover}
			panelPaddingSize="none"
			initialFocus={false}
		>
			{activeIdentity ? (
				<>
					<EuiPopoverTitle paddingSize="m">
						<ActiveIdentity identity={activeIdentity} />
					</EuiPopoverTitle>
					<AccountSwitcherIdentities
						identities={identities}
						activeIdentity={activeIdentity}
					/>
				</>
			) : null}
		</EuiPopover>
	);
};
