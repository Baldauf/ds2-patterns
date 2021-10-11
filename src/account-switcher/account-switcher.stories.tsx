import React from 'react';
import { AccountSwitcher } from './account-switcher';
import '../App.css';

export default {
	title: 'AccountSwitcher'
};

export const playground = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<AccountSwitcher />
		</div>
	);
};
