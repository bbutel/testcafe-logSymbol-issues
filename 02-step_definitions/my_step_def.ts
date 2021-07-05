import {myLogger} from '../tools/logger'
import {Given} from '@cucumber/cucumber'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Given('I use logSympbol', async _testcafe => {
    myLogger.logsuccess(`Given I use logSympbol`)
})
