package ui.Projects;

import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import ui.*;
import utils.*;
import java.io.IOException;

import org.json.simple.JSONObject;

import java.util.concurrent.TimeUnit;


public class CrateProject {

    WebDriver driver;
    ProjectsPage projectsPage;
    LoginPage loginPage;
    SideMenuPage sideMenuPage;
    CreateProjectPage crateProjectPage;
    APIClient client = new APIClient("https://interviewer.testrail.net/");
    String BaseURL = "https://qa-interviewer.herokuapp.com/";

    @BeforeTest(groups = {"functest"})
    public void before() {
        client.setUser("oksana.gorbachenko.2009@gmail.com");
        client.setPassword("123456QWERTY");


        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        System.setProperty("webdriver.chrome.driver", ".\\chromedriver.exe");
        driver = new ChromeDriver(capabilities);
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
        projectsPage = new ProjectsPage(driver);
        loginPage = new LoginPage(driver);
        sideMenuPage = new SideMenuPage(driver);
        crateProjectPage = new  CreateProjectPage(driver);

    }

    ///////////////////////=========== Project:Create=============////////////////////////

    @Test(groups = {"functest", "47", "UI"})
    public void assertElementsOnCreateProjectPage() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/article/div/div/div/div/h3")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"link-to-list\"]")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("create-project-title")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("create-project-descr")).isDisplayed());
            String createDiabledButton = driver.findElement(By.id("create-project-submitBtn")).getAttribute("disabled");
        Assert.assertEquals(createDiabledButton, "true");
        Assert.assertTrue(driver.findElement(By.id("create-project-resetBtn")).isDisplayed());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/47", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }

    @Test(groups = {"functest", "141"})
    public void assertUniquenessProjectName() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        crateProjectPage.typeTitle("Tin");
        crateProjectPage.typeDesc("Test");
        crateProjectPage.clickCreateProjectButton();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"app\"]/article/div/div/div/form/div[1]/span")).isDisplayed());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/141", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }

    @Test(groups = {"functest", "142"})
    public void assertBackToListButton() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.clickBackToListButton();
        String uri = driver.getCurrentUrl();
        Assert.assertEquals(uri, BaseURL+"projects");



        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/142", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }

    @Test(groups = {"functest", "143"})
    public void assertCancelForEmptyForm() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.clickCancelButton();
        String uri = driver.getCurrentUrl();
        Assert.assertEquals(uri, BaseURL+"projects");



        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/143", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }

    @Test(groups = {"functest", "144"})
    public void assertCancelForFilledForm() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.typeTitle("Test");
        projectsPage.clickCancelButton();
        Assert.assertTrue(driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div")).isDisplayed());

    }

    @Test(groups = {"functest", "144"})
    public void assertCancelForFilledDesc() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.typeDescr("Test");
        projectsPage.clickCancelButton();
        Assert.assertTrue(driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div")).isDisplayed());

    }

         @Test(dependsOnMethods = {"assertCancelForFilledForm", "assertCancelForFilledDesc"}, groups = {"144"})
         public void sentResultForEmail() throws InstantiationException {

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/144", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }

    }


    @Test(groups = {"functest", "146"})
    public void assertExistenceOfCreatedProject() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.typeTitle("1Test");
        projectsPage.typeDescr("TestTest");
        projectsPage.clickFinalCeateProjectButton();
      //  Assert.assertTrue(driver.findElement(By.className("alert")).isDisplayed());
      //  notification alert alert-success alert-dismissible
        String uriProj = driver.getCurrentUrl();
        Assert.assertEquals(uriProj, BaseURL+"#/projects");
        String test = driver.findElement(By.linkText("1Test")).getAttribute("href");
        driver.get(test);
        projectsPage.clickDeleteProjectButton();
        Assert.assertTrue(driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div")).isDisplayed());
        projectsPage.clickYesOnDeletePopup();



        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/146", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }




    }

    //TODO ALERT for created project


    @Test(groups = {"functest", "147"})
    public void assertChangeForCreateButton() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        Assert.assertFalse( driver.findElement(By.id("create-project-submitBtn")).isEnabled());
        projectsPage.typeTitle("Test");
            String DiabledButton = driver.findElement(By.id("create-project-submitBtn")).getAttribute("disabled");
        Assert.assertEquals(DiabledButton, "true");
        projectsPage.typeDescr("TestTest");
        Assert.assertTrue( driver.findElement(By.id("create-project-submitBtn")).isEnabled());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/147", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }

    }


///////////===================SUB-CASE Fields VALIDATION=================////////////////////////

    @Test(groups = {"functest", "136"})
    public void assertMaxLeghtForProjectTitle() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.typeTitle("Test");
        String lengthForProjectTitle = driver.findElement(By.id("create-project-title")).getAttribute("maxlength");
        Assert.assertEquals(lengthForProjectTitle, "60");

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/136", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }

    }

    @Test(groups = {"functest", "137and135"})
    public void assertMinLeghtForProjectDescriptionAndDesc() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        String createDiabledButton = driver.findElement(By.id("create-project-submitBtn")).getAttribute("disabled");
        Assert.assertEquals(createDiabledButton, "true");
        projectsPage.typeTitle("T");
        projectsPage.typeDescr("T");
        Assert.assertTrue( driver.findElement(By.id("create-project-submitBtn")).isEnabled());

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/137", body);
            client.sendPost("add_result_for_case/35/135", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }

    }

    @Test(groups = {"functest", "138"})
    public void assertMaxLeghtForProjectDesc() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        String lengthForProjectDesc = driver.findElement(By.id("create-project-descr")).getAttribute("maxlength");
        Assert.assertEquals(lengthForProjectDesc, "3000");

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/138", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }

    }

    @Test(groups = {"functest", "139"})
    public void assertSupportOfSymbolsInFieldTitleAndDesc() throws InterruptedException {

        loginPage.open();
        driver.manage().window().maximize();
        sideMenuPage.clickProjectsItem();
        projectsPage.clickMainCreateProjectButton();
        projectsPage.typeTitle("йцукенгг");
        projectsPage.typeDescr("йцукенг");
        projectsPage.clickFinalCeateProjectButton();
        driver.findElement(By.xpath("//*[@id=\"app\"]/article/div/div/div/form/div[1]/span")).isDisplayed();
        driver.findElement(By.xpath("//*[@id=\"app\"]/article/div/div/div/form/div[2]/span")).isDisplayed();

        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/35/139", body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }

    }


        @AfterTest(groups = {"functest"})
        public void after() { driver.quit();

        }
    }