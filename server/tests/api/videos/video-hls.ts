/* tslint:disable:no-unused-expression */

import * as chai from 'chai'
import 'mocha'
import {
  checkTmpIsEmpty,
  doubleFollow,
  flushAndRunMultipleServers,
  flushTests,
  killallServers,
  ServerInfo,
  setAccessTokensToServers
} from '../../../../shared/utils'

const expect = chai.expect

describe('Test multiple servers', function () {
  let servers: ServerInfo[] = []
  let videoUUID = ''

  before(async function () {
    this.timeout(120000)

    servers = await flushAndRunMultipleServers(2, { transcoding: { hls: { enabled: true } } })

    // Get the access tokens
    await setAccessTokensToServers(servers)

    // Server 1 and server 2 follow each other
    await doubleFollow(servers[0], servers[1])
  })

  it('Should upload a video and transcode it to HLS', async function () {
    // Check master playlist
    // Check sub playlists
    // Check segment sha1
    // Check segments curl
  })

  it('Should have the video on server 2', async function () {

  })

  it('Should update the video', async function () {

  })

  it('Should delete the video', async function () {

  })

  it('Should have the playlists/segment deleted from the disk', async function () {

  })

  describe('TMP directory', function () {
    it('Should have an empty tmp directory', async function () {
      for (const server of servers) {
        await checkTmpIsEmpty(server)
      }
    })
  })

  after(async function () {
    killallServers(servers)

    // Keep the logs if the test failed
    if (this['ok']) {
      await flushTests()
    }
  })
})
