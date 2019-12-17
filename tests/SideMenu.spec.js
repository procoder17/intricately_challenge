import SideMenu from '../src/components/SideMenu.vue'

describe('SideMenu', () => {
  it('sets the correct default data', () => {
    expect(typeof SideMenu.data).toBe('function')
    const defaultData = SideMenu.data()
    expect(defaultData.activeTab).toBe('data')
  })
})