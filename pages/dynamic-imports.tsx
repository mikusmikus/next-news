import React from 'react'
import { useRouter } from 'next/dist/client/router'
import dynamic from 'next/dynamic'

// const auth = dynamic(()=> import('./Auth'))
// const notAuth = dynamic(()=> import('./NotAuth'))

//ar dynamic importiem var nohendlot to, ka tikai tad kad nepieciesams , tiks novilkts js bundle un atseviskaa failaa neviss viss kopaa kaa ir default
// ja user ir vislaik ielogojies, tad SSR importes tikai Auth...
const Dynamic = () => {
	return (
		<div>
		
			{/* { user? <auth /> : <notAuth/>} */}
			<h1>hello</h1>
		</div>
	)
}

export default Dynamic
