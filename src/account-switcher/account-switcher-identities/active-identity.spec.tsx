import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountSwitcherIdentity from './account-switcher-identity';

describe('account-switcher / identity', () => {
	it('renders the company name when provided an Identity && !active', () => {
		const MOCK_IDENTITY = {
			account_id: '2bef660d-2130-4ea2-a956-cb88817d5978',
			company_id: 91,
			company_name: 'Capital Equipment, Inc.',
			user_id: 417,
			user_name: 'Wilburt Cisco',
			user_email: 'wilburt_cisco@equipmentshare.com',
		};

		render(<AccountSwitcherIdentity identity={MOCK_IDENTITY} />);

		expect(screen.getByTestId('single-identity')).toHaveTextContent(
			/Capital Equipment, Inc./i,
		);
	});

	it('renders an Identity as the active Identity when set as active', () => {
		const MOCK_IDENTITY = {
			account_id: '2bef660d-2130-4ea2-a956-cb88817d5978',
			company_id: 91,
			company_name: 'Capital Equipment, Inc.',
			user_id: 417,
			user_name: 'Wilburt Cisco',
			user_email: 'wilburt_cisco@equipmentshare.com',
		};

		render(<AccountSwitcherIdentity identity={MOCK_IDENTITY} active />);
		expect(screen.getByTestId('active-identity')).toBeInTheDocument();
	});
});
